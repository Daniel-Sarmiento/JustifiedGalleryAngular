import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  
  imagenes = [
    "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
    "https://www.viajejet.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada-1440x810.jpg",
    "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
    "https://img.freepik.com/foto-gratis/parques-montanas-reflexion-montana-decoracion-jardin_1417-1025.jpg?size=626&ext=jpg",
    "https://www.arqhys.com/wp-content/uploads/2012/08/Paisajes-hermosos-011-1387054859166-paisajes-hermosos-cascada-multicolor.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSisoBlQbywTKShhTNJQgxwzkPMRZwVEMWVuwZHP5BjRPFhBvbw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDvknymI8_82lDlJsN54aUTqBcboYXj1B_WF_FO46CrSigyww",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsj2SrmG1XDdrujw621Dx3XSBsUN2TxboYFHZYNqW_KrvY0MlN8w",
    "https://www.viajejet.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada-1440x810.jpg",
    "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
    "https://img.freepik.com/foto-gratis/parques-montanas-reflexion-montana-decoracion-jardin_1417-1025.jpg?size=626&ext=jpg",
    "https://www.arqhys.com/wp-content/uploads/2012/08/Paisajes-hermosos-011-1387054859166-paisajes-hermosos-cascada-multicolor.jpg",
    "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
    "https://www.viajejet.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada-1440x810.jpg",
    "https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg",
    "https://img.freepik.com/foto-gratis/parques-montanas-reflexion-montana-decoracion-jardin_1417-1025.jpg?size=626&ext=jpg",
    ]

 
  ngAfterViewInit(){
    $("#mygallery").justifiedGallery();
  }

}
