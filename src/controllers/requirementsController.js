// controllers/requirementsController.js
import Requirements from '../models/requirements.js';

const createRequirements = async (req, res) => {
  try {
    const { title, description, gameId } = req.body;

    const newRequirements = await Requirements.create({
      title,
      description,
      gameId,
    });

    res.status(201).json(newRequirements);
  } catch (error) {
    console.error('Error creating requirements:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllRequirements = async (req, res) => {
  try {
    const allRequirements = await Requirements.findAll();
    res.status(200).json(allRequirements);
  } catch (error) {
    console.error('Error fetching all requirements:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateRequirementsByID = async (req, res) => {
  try {
    const requirementID = req.params.requirementID;
    const { title, description, gameId } = req.body;

    const requirementToUpdate = await Requirements.findByPk(requirementID);

    if (!requirementToUpdate) {
      return res.status(404).json({ messageStatus: `No se encontró el requisito con ID: ${requirementID}` });
    }

    await requirementToUpdate.update({
      title,
      description,
      gameId,
    });

    res.status(200).json(requirementToUpdate);
  } catch (error) {
    console.error('Error updating requirements:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteRequirementsByID = async (req, res) => {
  try {
    const requirementID = req.params.requirementID;

    const requirementToDelete = await Requirements.findByPk(requirementID);

    if (!requirementToDelete) {
      return res.status(404).json({ messageStatus: `No se encontró el requisito con ID: ${requirementID}` });
    }

    await requirementToDelete.destroy();

    res.status(200).json({ messageStatus: `Se eliminó exitosamente el requisito con ID: ${requirementID}` });
  } catch (error) {
    console.error('Error deleting requirements:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export {
  createRequirements,
  getAllRequirements,
  updateRequirementsByID,
  deleteRequirementsByID,
};
