<template>
<header id="header">
    <div class="navbar">
        <div id="QuestBar">
            <input class="Quest" type="text" name="input" placeholder="pesquise aqui...">
            <button id="QuestButton"><img id="ImgButton" src="@/icons/icon-pesquisar.png"></button>
        </div>
        <div id="perfilbar">
            <img id="icon" src="@/icons/lilian.png">
            <p id="name">lilia</p>
        </div>
    </div>
</header>
    <section class="RouterBar">
        <div id="Questcolumn">
            <div id="RecentQuestions"> 
                <p id="Titelrecent">Recentes</p>
            </div>  
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
    padding: 0;
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
    font-size: 18px;
    line-height: 24px;
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
    position: relative;
    margin: 0;
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
    height: 100%;
}
#perfilbar{
    margin-left: 1.85%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}
#icon{
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
    align-items: center;
    width: 1728px;
    padding-bottom: 17px;
    padding-top: 17px;
}
.Quest{
    border: 0;
    font-family: 'Rubik';
    outline: none;
    margin: 0 auto;
    margin-left: 12px;
    padding: 0;
    background-color: #191622;
    height: 100%;
    border-radius: 4px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-transform: capitalize;  
    width: 86.23%;
}
#QuestButton{
    outline: none;
    padding: 0;
    position: relative;
    border: 0px;
    background: #191622;
    border-radius: 4px;
}
#ImgButton{
    position: relative;
    background: #191622;
    height: 79%;
}
#QuestBar{
    margin-right: 2.55%;
    height: 50px;
    background: #191622;
    box-shadow: 0px 2px 4px rgba(255, 121, 198, 0.25);
    border-radius: 4px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    width: 21%;
}
.RouterBar{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
#Questcolumn{   
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse; 
    justify-content: space-between;
    width: 1728px;
    height: 1033px;
    margin: 0;
    box-sizing: border-box;
}
#RecentQuestions{
    width: calc(100% - 76.45%);
    background: #191622;
    border-left: 1px solid #292730;

}
#DoubtsandQuestions{
    width: calc(100% - 23.80%)
}
#doubt_or_question{ 
    display: flex;
    margin-top: 18px;
    margin-left: 33px;
    width: calc(100% - 65px) ;
    height: calc(100% - 956px);
    background: #191622;
    border-radius: 4px;
    justify-content: space-between;
    box-sizing: border-box;
}
@media only screen and (min-width: 0px) and (max-width: 850px) {
    .navbar{
        height: 25px;
    }
    #perfilbar{
        height: 25px;
    }
    #icon{
        height: 25px;
        width: 25px;
    }
    #QuestBar{
        height: 25px;
    }
    #doubt_or_question{
        height: 38px;
    }
    #Imput_quest{
        height: 36px;
        margin-left: 0;
    }
    #button_quest{  
        height: 36px;
        width: 36px;
    }
    #image_button{
    position: relative;
    top: 2px;
    align-items: center;
    height: 11.14px;
}
#Titel{
    margin-top: 39px;
}
}
</style>