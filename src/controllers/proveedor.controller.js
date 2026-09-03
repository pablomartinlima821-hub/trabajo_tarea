import mongoose from "mongoose";
import Proveedor from "../models/Proveedor.js";

export const crearProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerProveedores = async (_req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerProveedorPorId = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "ID de proveedor inválido" });
    }

    const proveedor = await Proveedor.findById(req.params.id);
    if (!proveedor) {
      return res.status(404).json({ error: "Proveedor no encontrado" });
    }

    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarProveedor = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "ID de proveedor inválido" });
    }

    const proveedor = await Proveedor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!proveedor) {
      return res.status(404).json({ error: "Proveedor no encontrado" });
    }

    res.status(200).json(proveedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const eliminarProveedor = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "ID de proveedor inválido" });
    }

    const proveedor = await Proveedor.findByIdAndUpdate(
      req.params.id,
      { estadoActivo: false },
      { new: true, runValidators: true }
    );

    if (!proveedor) {
      return res.status(404).json({ error: "Proveedor no encontrado" });
    }

    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
