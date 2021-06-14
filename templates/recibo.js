export default function recibo(info) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .main-table {
                /* border: 1px solid black; */
                margin-left: auto;
                margin-right: auto;
            }
    
            th{
                /* border: 1px solid black; */
                font-size: xx-small;
                text-align: left;
                height: 30px;
                font-family: Arial, Helvetica, sans-serif;
            }
    
            .answer {
                width: 75px;
                font-weight: bold;
            }
    
            .container {
                width: 15cm;
            }
    
            .title {
                width: 15cm;
                font-size: medium;
                text-align: center;
                font-weight: bold;
            }
            hr{
                background-color: #E9E5EA;
                background-color: whitesmoke;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="title">
                <p>
                    ORDEN DE PAGO <br> <br>
                    POR CONCEPTO DE CURSO
                </p>
            </div>
            <hr color="Gainsboro" size="1px" noshade="noshade">
            <div class="container">
                <table class="main-table">
                    <tr>
                        <th colspan="2">Recibimos de</th>
                        <th colspan="8"></th>
                    </tr>
                    <tr>
                        <th colspan="2">La cantida de</th>
                        <th colspan="8"></th>
                    </tr>
                    <tr>
                        <th colspan="3">Por concepto de inscripción al curso </th>
                        <th colspan="7"></th>
                    </tr>
                    <tr>
                        <th>Sala:</th>
                        <th class="answer"></th>
                        <th>Grupo:</th>
                        <th class="answer"></th>
                        <th colspan="3">A efectuarse del</th>
                        <th class="answer"></th>
                        <th>a</th>
                        <th class="answer"></th>
                    </tr>
                    <tr>
                        <th colspan="2">Tipo de alumno:</th>
                        <th colspan="2"></th>
                        <th colspan="3">Horario de</th>
                        <th class="answer"></th>
                        <th>a</th>
                        <th class="answer"></th>
                    </tr>
                    <tr>
                        <th colspan="2">Número de cuenta:</th>
                        <th colspan="2"></th>
                        <th colspan="2">Teléfono:</th>
                        <th class="answer"></th>
                        <th>Correo:</th>
                        <th colspan="2"></th>
                    </tr>
                </table>
                <hr color="Gainsboro" size="1px" noshade="noshade">
            </div>
        </div>
    </body>
    
    </html>`
}
