const DocumentModel = require("../models/documentModel");

const createDocument = async (request) => {
     const document = await DocumentModel.create(request);
     return document;
};

const findDocument = async (request) => {
     const document = await DocumentModel.find(request);
     return document;
};

const findDocumentById = async (request) => {
     const document = await DocumentModel.findOne(request);
     return document;
};

const updateDocument = async (id, data) => {
     const document = await DocumentModel.findOneAndUpdate(id, data, {
          new: true,
     });
     return document;
};

const deleteDocument = async (id) => {
     const document = await DocumentModel.findOneAndDelete(id);
     return document;
};

module.exports = {
     createDocument,
     findDocument,
     findDocumentById,
     updateDocument,
     deleteDocument,
};
