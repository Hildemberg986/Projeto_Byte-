<template>
<header id="header">
    <div class="navbar">
        <div id="QuestBar">
            <input class="Quest" type="text" name="input" placeholder="pesquise aqui...">
            <button id="QuestButton"><img id="ImgButton" src="@/icons/icon-pesquisar.png"></button>
        </div>
        <div id="perfilbar">
            <img id="icon" src="https://i.pinimg.com/originals/dd/b8/e0/ddb8e0682d8c245bcf3802ec2cacfa2d.jpg">
            <p id="name">Ola mundo</p>
        </div>
    </div>
</header>
    <section class="RouterBar">
        <div id="Questcolumn">
            <div id="DoubtsandQuestions">
                <div id="doubt_or_question">
                    <input id="Imput_quest" type="text" placeholder="escreva sua duvida ou pergunga...">
                    <button id="button_quest"><img id="image_button" src="@/icons/icon-enviado.png" ></button>
                </div>
                <p id="Titel">Duvidas e Perguntas</p>
                <div>
                    <!-- criar metodos-->
                </div>
            </div>
            <div id="RecentQuestions"> 
                <p id="Titelrecent">Recentes</p>
            </div>
        </div>
    
    </section>
</template>
<script>
export default {
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');

input::placeholder {
    color: #292730;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-transform: lowercase;
}   
#image_button{
    height: 23.83px;
}
#button_quest{
height: 77px;
width: 77px;
background-color: #191622;
border: 0;
border-radius: 4px;
}
#Imput_quest{
    height: 75px;    
    font-family: 'Rubik';
    outline: none;
    margin: 0 auto;
    margin-right: 5px;
    position: relative;
    background-color: #191622;
    border: 0;
    border-radius: 4px;
    padding-left: 10px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    width: calc(100% - 77px);
}
#Titelrecent{
    display: flex;
    align-items: center;
    width: 105px;
    height: 27px;
    margin: 0;
    margin-top: 16px;
    margin-left: 12px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #FF79C6;
}
#Titel{
    display: flex;
    align-items: center;
    margin: 0;
    margin-top: 79px;
    margin-left: 32px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    color: #FF79C6;
}

#name{
    margin-left: 16px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-transform: capitalize;
    line-height: 24px;
    size: 18px;
    line-height: 24px;
    color: #FFFFFF;
}
#perfilbar{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}
#icon{
    margin-left: 32px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 4px 0px 10px rgba(255, 121, 198, 0.25);
}
#header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.navbar{
    border-bottom: 1px solid #292730;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse; 
    justify-content: space-between;
    width: 1728px;
    padding: 0;
}
.Quest{
    font-family: 'Rubik';
    outline: none;
    margin: 0 auto;
    bottom: 4px;
    right: 16.54px;
    margin-right: 5px;
    position: relative;
    background-color: #191622;
    border: 0;
    padding-left: 10px;
    height: 78%;
    width: 77%;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-transform: capitalize;  
}
#QuestButton{
    outline: none;
    left: -10px;
    top: 4px;
    padding: 0;
    margin: 0 auto;
    position: relative;
    right: 45px;
    border: 0px;
    height: 88%;
    width: 12.12%;
    background: #191622;
    border-radius: 4px;
}
#ImgButton{
    background: #191622;
    height: 79%;
}
#QuestBar{
    padding: 0;
    margin-top: 17px;
    margin-bottom: 17px;
    text-align: right;
    margin-right: 44px;
    width: 21%;
    height: 50px;
    border-radius: 4px;
    background: #191622;
    box-shadow: 0px 2px 4px rgba(255, 121, 198, 0.25);
    border-radius: 4px;
}
.RouterBar{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
#Questcolumn{   
    display: flex;
    flex-wrap: wrap-reverse; 
    justify-content: space-between;
    width: 1728px;
    height: 1033px;
    box-sizing: border-box;
}
#RecentQuestions{
    width: 23.55%;
    background: #191622;
    border-left: 1px solid #292730;

}
#DoubtsandQuestions{
   /*  width: calc(100% - 411px);  */     
   width: 76%;
}
#doubt_or_question{ 
    display: flex;
    margin-top: 18px;
    margin-left: 32px;
    width: calc(100% - 65px) ;
    height: calc(100% - 956px);
    background: #191622;
    border-radius: 4px;
    box-sizing: border-box;
    justify-content: space-between;
    box-sizing: border-box;
}
</style>