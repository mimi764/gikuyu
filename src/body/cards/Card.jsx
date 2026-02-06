import React from 'react'
import Carddesc from './Carddesc'
import './Card.css';

const Card = () => {
  return (
    <div className='cardcontainer'>
    <div className='cad'>
      <p className='para'>
        Thaayú nyúmba, njano íno ní ya kúona ní ha túoreirí, kana tukíiga 
        kíría kíarí gito múhohio túkíoya kíene. Na tondú túíragwo 'múgathí wa kúona úteaga wa mwene' rí, íí hihi úyú ní witú kana ní wene ?
Úría múgíkúyú arí tene, úmúthí níguo arí? <br/>
Kana hihi twaneirwo gíthori túkíría kíinií !? <br/>
Íno no njano útairía ingí no yandíkítwo arí mwíhoko  gúkúhingúra maitho wícúranií wone níkíí maúndú maikara úú. <br/>
Njano ya mbere ní míhíríga kúríngana na ciana cia GÍKÛYÚ.
Úuría gútúire atí mwana oyaga múhíríga wa ithe. <br/>

      </p>
    <Carddesc
      name="Wanjirú"
      bata=" ANJIRÚ
      "
      two="Ní marí igweta ría kúhoreria nyamú cia gíthaka."
      metugo="
      Ahingeri thú cia rúrírí, aruti a magongona ma kúrathima mbútú cia mbara.
Ní marí kaúndú na kangí( múgí-kúrí-úyú): úú ní kúga marí 
kaúndú moí gatoíkaine ní aya angí;.
      "
    />
    <Carddesc
       name="Wambúi"
      bata=" AMBÚI , Mwíthetheria
      "
      one=" Ní marí kaúndú ka útongoria.
      "
      metugo="
Athigani na aiyeri hitho cia thú harí rúrírí.
      "
    />
    <Carddesc
      name="Wanjikú"
      bata=" 
AGACIKÚ
      "
      two="Ní marí kío múno, nío itonga cia rúrírí amu ní mathiaga nanja gútaha."
      one="Ní ahúri a biathara."
      metugo="
      Kúría nakuo matihúnaga.
      "
    />
    <Carddesc
      name="Njeri"
      bata=" 
ACEERA
      "
      one="Aciríríri rúrírí."
      tre="Gíta ní kíao."
      metugo="
      Ní marí ciugo cie cama no matingíkohe kíndú kíao.
      "
      two="Ní maceeraga múno no maticeranagíra o (Múcera ndaceraga na úngí)."
    />
    <Carddesc
      name="Wairimú"
      bata=" 
 AIRIMÚ ,  AGATHIGIA
      "
      two="Ní marí na ugí wa ciugo  amu nío maganagíra ciana cia itúra.
"
      one="Ní marí úhoti wa kúgera maúndú matahaníkíte."
      metugo="
      Cira wao ndúthiraga magíkinyeria kíhoto.
      "
    />
    <Carddesc
      name="Nyambura"
      bata=" 
ETHAGA ,  AMBURA   ,   AKÍÚRÚ. "
      one="Hinya wao wa rúrimí ní omaheagithia gítíyo nígúkorwo no marume na marathime gúkira múhíríga úngí.
"
   two="Ní marumaga thú cia rúrírí, ningí ní matumaga rúrírí rúikare na thayú gútarí Úúru.
     "
      metugo="
          Ní marí rúrímí rwí nderu.
      "
    />
    <Carddesc
       name="Wangarí"
      bata=" 
 ANGARÍ , AITHEKAHUNO.
      "
      one="Makoragwo me hinga na aingí ao me ngundi njirú."
      metugo="
          Ní aguími a rúrírí.
      "
      two="Ní marí gítíyo gía kúrera ciana iria iciaragwo itakinyítie thukú."
    />
    <Carddesc
      name="Wangúi"
      bata=" 
ANGÚI , AITHIEGENI.
      "
      two="Ní makinyagia ndeto kíama-iní, ningí ní aiguithania.
 "
      one="Ní marí múcene múno nígúkorwo nío matakiraga."
      metugo="
      Ní marí oigíríríki wa kúnyuga amu ní marí múrúri múno.
      "
    />
    <Carddesc
      name="Waithíra"
      bata="
          ANGECI ,  AITHÍRA-ANDÚ
      "
      metugo="Arí múiretu wa Kenda wa GÍKÛYÚ. ."
      one="Atumia ao nío marí na úigíríríki wa guciara njamba irí ngúthi cia ita."
      two="
      Ní a kúrangera rúrírí."
    />
    <Carddesc
      name="WARIGIA"
      bata="WAMÚYÚ ,  Aica-kamúyú , WANJÚGÚ.
      "
      one="Kíhumo kíao ní WARIGIA úría útahikire, kíhinganda kía GÍKÛYÚ."
      two="Agíire ihu arí kwa mwarí wanyina akímúhiúheria."
      metugo="
   Ní aguími biú.
      "
    />
      
    </div>
      
      

    </div>
  )
}

export default Card
