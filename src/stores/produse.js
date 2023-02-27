import { defineStore } from "pinia";
import produse from "@/data/produse.json"

export const useProduse = defineStore("produse", {
  state: () => {
    return { produse }
  }
})