import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    contacto: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    telefono: {
      type: String,
      trim: true
    },
    direccion: {
      type: String,
      trim: true
    },
    estadoActivo: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Proveedor", proveedorSchema);
