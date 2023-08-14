const Character = require('../models/Character');
const { getFilters, getPagination } = require('../helpers/filtersCharacters')
const upload = require('../helpers/multerConfig');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);
const pdf = require('html-pdf');
const { cardHTML } = require('../helpers/cardHtml');

const SERVER_PATH = 'http://localhost:4000/';

const createCharacter = async (req, res) => {
  upload.single('image')(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: 'Error al cargar la imagen' });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const { name, status, species, type, gender, episodes, location, origin } = req.body;
      const image = req.file ? `/uploads/${req.file.filename}` : '';
      const character = await Character.create({
        name,
        status,
        species,
        type,
        gender,
        image,
        episodes,
        location: {
          name: location
        },
        origin: {
          name: origin
        }
      });

      res.status(201).json(character);
    } catch (err) {
      console.log(err)
      res.status(400).json({ error: err.message });
    }
  });
};

const getCharacters = async (req, res) => {
  try {
    const { filters, options } = getFilters(req.query)

    const characters = await Character.paginate(filters, options);
    const paginate = getPagination(characters, req)

    const charactersWithImageUrl = characters.docs.map(character => ({
      ...character.toObject(),
      image: SERVER_PATH + character.image
    }));

    const modifiedPaginate = { ...paginate, results: charactersWithImageUrl };

    res.json(modifiedPaginate);

  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message });
  }
};


const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    const characterWithImageUrl = {
      ...character.toObject(),
      image: SERVER_PATH + character.image
    };

    res.json(characterWithImageUrl);
  } catch (err) {
    res.status(404).json({ error: 'Personaje no encontrado' });
  }
};

const updateCharacterById = async (req, res) => {
  try {
    const { id } = req.params;

    const character = await Character.findById(id);
    if (!character) {
      return res.status(404).json({ error: 'Personaje no encontrado' });
    }

    upload.single('image')(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: 'Error al cargar la imagen' });
      } else if (err) {
        return res.status(400).json({ error: err.message });
      }

      const { name, status, species, type, gender, episodes, location, origin } = req.body;
      console.log([...episodes])

      const image = req.file ? `/uploads/${req.file.filename}` : character.image;

      if (req.file && character.image) {
        const oldImagePath = path.join(__dirname, '..', 'public', character.image);
        try {
          fs.unlinkSync(oldImagePath);
        } catch (unlinkErr) {
          console.error('Error deleting old image:', unlinkErr);
        }
      }

      character.name = name;
      character.status = status;
      character.species = species;
      character.type = type;
      character.gender = gender;
      character.episodes = episodes;
      character.image = image;
      character.location = {
        name: location
      };
      character.origin = {
        name: origin
      };

      await character.save();

      res.json(character);
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);

    if (!character) {
      return res.status(404).json({ error: 'Personaje no encontrado' });
    }

    if (character.image) {
      const imagePath = path.join(__dirname, '..', 'public', character.image);
      await unlinkAsync(imagePath);
    }

    await Character.findByIdAndDelete(req.params.id);
    res.json({ message: 'Personaje eliminado exitosamente' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Error del servidor' });
  }
};

const generatePDF = async (req, res) => {
  const character = await Character.findById(req.params.id);
  const HTML = cardHTML(character)

  const options = {
    format: 'Letter',
    orientation: 'landscape'
  };

  pdf.create(HTML, options).toStream((err, stream) => {
    if (err) {
      res.status(500).send('Internal Server Error');
      return;
    }

    res.setHeader('Content-Type', 'application/pdf');
    stream.pipe(res);
  })
}

module.exports = {
  createCharacter,
  getCharacters,
  getCharacterById,
  updateCharacterById,
  deleteCharacterById,
  generatePDF
}