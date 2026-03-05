import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "./credenciales.json" with { type: "json" };

const SHEET_ID = "TU_ID_DEL_SHEET";

async function subirDatos() {

    const doc = new GoogleSpreadsheet(SHEET_ID);

    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
        nombre: "Nicolas",
        trabajo: "Programador",
        sueldo: 5000
    });

    console.log("Dato subido");
}

subirDatos();