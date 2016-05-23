# (Projeto descontinuado por falta de adesão da comunidade 2016-05-23)

## Agenda de Eventos de TI na Bahia

Projeto de criação de uma agenda de eventos de TI na Bahia, feita em AngularJs com persistência em Firebase.

Esse projeto tem como objetivo listar todos os eventos de TI realizados na Bahia para que promotores de eventos possam programar novos eventos sem entrar em conflito com outros que já estejam agendados.

## Histórico

O projeto foi criado em Julho de 2015 e a primeira versão ficou parada no ar, funcional, desde lá.

Inspirado na especificação  dada no projeto [devinbahia/agenda](https://github.com/devinbahia/agenda), o cadasrtro foi refeito e agora corresponde à:

```json
{
    "name": "Nome do Evento",
    "location": {
        "name": "Endereço do local do evento"
    },
    "event_start": "0000000000",
    "event_end": "0000000000",
    "cfp_start": "0000000000",
    "cfp_end": "0000000000",
    "hashtag": "#hashtags",
    "website": "http://example.com",
    "twitter": "@username",
    "banner": "url",
    "description": "Uma breve descrição",
    "organizers": [
        {
            "name": "Organizer Name",
            "twitter": "@twitter_handle"
        }
    ]
}
```

### Onde os campos adicionados foram:

* **banner**: Url da imagem promocional ou banner do evento
* **description**: Uma breve descrição do evento

### E as alterações:

* os campos de data agora comportam timestamps unix
