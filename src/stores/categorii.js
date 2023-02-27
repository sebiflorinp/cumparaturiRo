import { defineStore } from "pinia"
import produse from '@/data/produse.json'
import categorii from '@/data/categorii.json'

export const useCategorii = defineStore("categorii", {
  state: () => {
    return { categorii }
  },
  getters: {
    categoriePopulara(){
      return (nrCategorie) => {
        let aparitii = [
          {id:1, nrAparitii:0},
          {id:2, nrAparitii:0}, 
          {id:3, nrAparitii:0}, 
          {id:4, nrAparitii:0},  
          {id:5, nrAparitii:0}, 
          {id:6, nrAparitii:0}, 
          {id:7, nrAparitii:0}, 
          {id:8, nrAparitii:0}, 
          {id:9, nrAparitii:0}, 
          {id:10, nrAparitii:0}, 
          {id:11, nrAparitii:0}, 
          {id:12, nrAparitii:0}, 
          {id:13, nrAparitii:0}, 
          {id:14, nrAparitii:0}, 
          {id:15, nrAparitii:0} 
        ]
        produse.forEach((produs) => {
          aparitii[produs.idCategorie-1].nrAparitii+=1
        })
        for(let i = 0; i < aparitii.length - 1; i++)
          for(let j = i; j < aparitii.length; j++)
            if(aparitii[i].nrAparitii <  aparitii[j].nrAparitii){
              let aux = aparitii[i]
              aparitii[i] = aparitii[j]
              aparitii[j] = aux 
            }
        return aparitii[nrCategorie].id
      }
    },
    gasesteCategorie(){
      return (id) => {
        console.log( categorii.filter( categorie => categorie.idCategorie == 1 ))
        return categorii.filter( categorie => { categorie.idCategorie === id})
      }
    }
  }
})