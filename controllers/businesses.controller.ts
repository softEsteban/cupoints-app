import { NextApiRequest, NextApiResponse } from "next";
import Businesses from "../models/business";

//http://localhost:3000/api/businesses
export async function getBusinesses(req: NextApiRequest, res: NextApiResponse) {
  try {
    const businesses = await Businesses.find({});
    // console.log(businesses)
    if (!businesses) return res.status(404).json({ error: "Businesses not found" });
    res.status(200).json(businesses);
  } catch (error) {
    console.error('Error while fetching businesses:', error);
    res.status(500).json({ error: "Internal server error" });
  }
}

//http://localhost:3000/api/businesses/random
export async function getRandomBusiness(req: NextApiRequest, res: NextApiResponse) {
  try {
    const businesses = await Businesses.find({});
    
    if (!businesses || businesses.length === 0) {
      return res.status(404).json({ error: "Businesses not found" });
    }

    // Generate a random index to select a random business
    const randomIndex = Math.floor(Math.random() * businesses.length);
    const randomBusiness = businesses[randomIndex];
    
    res.status(200).json(randomBusiness);
  } catch (error) {
    console.error('Error while fetching businesses:', error);
    res.status(500).json({ error: "Internal server error" });
  }
}




