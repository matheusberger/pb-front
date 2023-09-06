import { type Knob } from "./knob";

export type Pedal = {
    id: number;
    name: string;
    brand: string;
    knobs: Knob[];
}