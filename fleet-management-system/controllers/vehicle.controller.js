import {supabase} from "../config/db.js"
export const addVehicle = async (req, res) => {
    try {
        const {owner_id, name, regiistration_number, allowed_passengers, rate_per_km } = req.body;

        const { date: owner} = await supabase
        .from("users")
        .select("role")
        .eq("id", owner_id)
        .single();

        if (owner.role !== "owner"){
            return res.status(430).json({message: "Only owners can add vehicles"});
        }
        const {data, error} = await supabase.from("vehicles").insert([{
            name,
            regiistration_number,
            allowed_passengers,
            rate_per_km,
            owner_id
        }]);
        if (error) throw error;

        res.status(201).json({message: "Vehicle added successfully", data});
    }catch(error){
        res.status(500).json({message: error.message})
    }
};