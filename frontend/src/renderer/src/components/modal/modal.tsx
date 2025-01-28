interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function UserModal({ isOpen, onClose, children }: UserModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
        x
        </button>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
