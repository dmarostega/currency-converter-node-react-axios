// src/components/MeuBotao.jsx

export default function MeuBotao({ texto, onClick }) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={onClick}
      >
        {texto}
      </button>
    );
  }
  