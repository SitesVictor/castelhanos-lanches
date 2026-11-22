// Dados do cardápio e das taxas de entrega (usado pelo site e pelo painel)
const CATEGORIAS = [
  { id:"hamburguer", nome:"Hambúrguer", itens:[
    [1,"Hambúrguer","Pão e bife de hambúrguer",12],
    [2,"X-Burguer","Pão, bife de hambúrguer e queijo",14],
    [3,"Egg Burguer","Pão, bife de hambúrguer e ovo",14],
    [4,"X-Egg","Pão, bife de hambúrguer, queijo e ovo",15],
    [5,"X-Egg Bacon","Pão, bife de hambúrguer, queijo, ovo e bacon",18],
    [6,"Bacon Burguer","Pão, bife de hambúrguer e bacon",15],
    [7,"X-Salada","Pão, bife de hambúrguer, queijo e presunto",15],
    [8,"X-Salada Bacon","Pão, bife de hambúrguer, queijo, presunto e bacon",17],
    [9,"X-Salada Egg","Pão, bife de hambúrguer, queijo, presunto e ovo",16],
    [10,"X-Bacon","Pão, bife de hambúrguer, queijo e bacon",16],
    [11,"X-Tudo","Pão, bife de hambúrguer, queijo, presunto, ovo e bacon",20],
    [12,"Lanchão","Pão, bife de hambúrguer, 2 queijos, 2 presuntos, 2 ovos e bacon",25],
    [13,"X-Calabacon","Pão, bife de hambúrguer, queijo, bacon e calabresa",18]
  ]},
  { id:"frango", nome:"Frango", itens:[
    [14,"X-Frango","Pão, filé de frango e queijo",15],
    [15,"X-Frango Egg","Pão, filé de frango, queijo e ovo",16],
    [16,"X-Frango Egg Salada","Pão, filé de frango, queijo, ovo e presunto",17],
    [17,"X-Frango Egg Bacon","Pão, filé de frango, queijo, ovo e bacon",20],
    [18,"X-Frango Bacon","Pão, filé de frango, queijo e bacon",18],
    [19,"X-Tudo de Frango","Pão, filé de frango, queijo, ovo, bacon e presunto",22],
    [20,"Frango Salada","Pão, filé de frango, queijo e presunto",16]
  ]},
  { id:"picanha", nome:"Pedaço de picanha", itens:[
    [21,"X-Picanha","Pão, pedaço de picanha e queijo",20],
    [22,"X-Egg Picanha","Pão, pedaço de picanha, queijo e ovo",22],
    [23,"X-Egg Bacon Picanha","Pão, pedaço de picanha, queijo, ovo e bacon",25],
    [24,"Bacon Picanha","Pão, pedaço de picanha e bacon",23],
    [25,"X-Salada Picanha","Pão, pedaço de picanha, queijo e presunto",22],
    [26,"X-Salada Bacon Picanha","Pão, pedaço de picanha, queijo, presunto e bacon",26],
    [27,"X-Salada Egg Picanha","Pão, pedaço de picanha, queijo, presunto e ovo",25],
    [28,"X-Bacon Picanha","Pão, pedaço de picanha, queijo e bacon",24],
    [29,"X-Tudo Picanha","Pão, pedaço de picanha, queijo, presunto, ovo e bacon",27]
  ]},
  { id:"mistos", nome:"Mistos", itens:[
    [30,"Misto","Pão, presunto e queijo",12],
    [31,"Misto Egg","Pão, presunto, queijo e ovo",13],
    [32,"Queijo Quente","Pão e queijo",10]
  ]},
  { id:"burguer-picanha", nome:"Hambúrguer de picanha", itens:[
    [42,"X-Picanha","Pão, bife de hambúrguer de picanha e queijo",15],
    [43,"X-Egg Picanha","Pão, bife de hambúrguer de picanha, queijo e ovo",16],
    [44,"X-Egg Bacon Picanha","Pão, bife de hambúrguer de picanha, queijo, ovo e bacon",20],
    [45,"Bacon Picanha","Pão, bife de hambúrguer de picanha e bacon",18],
    [46,"X-Salada Picanha","Pão, bife de hambúrguer de picanha, queijo e presunto",17],
    [47,"X-Salada Bacon Picanha","Pão, bife de hambúrguer de picanha, queijo, presunto e bacon",20],
    [48,"X-Salada Egg Picanha","Pão, bife de hambúrguer de picanha, queijo, presunto e ovo",20],
    [49,"X-Bacon Picanha","Pão, bife de hambúrguer de picanha, queijo e bacon",19],
    [50,"X-Tudo Picanha","Pão, bife de hambúrguer de picanha, queijo, presunto, ovo e bacon",22]
  ]},
  { id:"bebidas", nome:"Bebidas", itens:[
    [51,"Refrigerante lata","",7],
    [52,"Refrigerante 1,5L","",13],
    [53,"Refrigerante 2L","",15],
    [54,"Suco 500ml","",10],
    [55,"Água mineral 500ml","",4]
  ]}
];
const TAXAS = [
  ["Anchieta (Centro)",2],["Benevente, Jerusalém",2],["Avilã, Nova Esperança",2],
  ["Nova Anchieta, Planalto",2],["Novo Horizonte, Quitiba",3],["Ubu, Parati",3],["Recanto do Sol, PV4",4]
];
