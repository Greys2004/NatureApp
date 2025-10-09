import { Photo } from "./photo.model";
import { Amenity } from "./amenity.model";
import { Trail } from "./trail.model";

export interface Place {
  id: number;
  name: string;
  description: string;
  category: string;
  latitude: number;
  longitude: number;
  elevationMeters?: number | null;
  accessible: boolean;
  entryFee?: number | null;
  openingHours?: string | null;
  createdAt: string
  photos?: Photo[];
  amenities?: Amenity[];
  trails?: Trail[];
}
