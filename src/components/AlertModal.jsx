import React from 'react';

const AlertModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white w-96 p-6 rounded-lg shadow-md">
        <p className="mb-4">¿Deseas eliminar este paciente?</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 text-white"
            onClick={onConfirm}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
