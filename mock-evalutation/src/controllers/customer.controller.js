import { supabase } from "../db.js";

export const registerCustomer = async (req, res) => {
  const { full_name, email, phone } = req.body;

  if (!full_name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const { data, error } = await supabase
    .from("customers")
    .insert([{ full_name, email, phone }]);

  if (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "Email already exists." });
    }
    return res.status(500).json({ message: error.message });
  }
  res.status(201).json({ message: "Customer created", data });
};
