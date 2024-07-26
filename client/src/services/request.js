import axios from "axios";

export function getListProduct() {
    return axios
        .get("https://docs.google.com/spreadsheets/d/e/2PACX-1vQuw5s61AvKmwptvvH86zy7if6TfY5Iqx2vL7sOPumC6HcxfHD8bJF5_iDjOMR0Ki73jTEQR9zVpihZ/pub?output=csv")
        .then((response) => response.data)
        .catch((error) => console.error(error));
}

