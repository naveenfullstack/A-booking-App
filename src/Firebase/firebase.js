import { initializeApp } from "firebase/app";

const firebaseConfig = {
  type: "service_account",
  private_key_id: "73360fd3545d3b8af50579a76af35ec58221fd0e",
  apiKey: "AIzaSyA38MwZDpwkFzCYc5yak3ZljTgl5mWQ-7Q",
  authDomain: "portfolios-62a43.firebaseapp.com",
  projectId: "portfolios-62a43",
  storageBucket: "portfolios-62a43.appspot.com",
  messagingSenderId: "998336249272",
  appId: "1:998336249272:web:04833106e85d6e2eeae34d",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5fpPmHGI+tUXe\ns6tn3gEtNJly6fkonlbpTTRcg2wlMURx3UfRlsGb+vVpzAGTX+moykdOvd53UtI3\n1z5zdX35beCYB1ULcecrZDeM4igXM94nOmScilKtlTtfBfZ2iahqiSWyMiWV/NtZ\njzAaZi9oNik8RQ+dE+aGArHIQGOULXmbGg9g2qCtOU06Bw/4eWiYD3wwBzjcm9kR\nYXjalpnfcbwbzy7KHy0T4mkYaZN9N4+jMHQkFNa4WoF41AdQfwVBDjbu+5TZlC97\nOPsG6U23fzhrjfnSyswmUaKjtSNK/4mpP5JvFhq0tKsmIRurL9zeaTe4l8dt+Mjj\n9zPJkU8vAgMBAAECggEABDxUMz51rdnk0QuIP/RtUXNwh5O5KUjIUkZ9ihlEKGtC\nFVmIsMwA+sdVwEc0yAE6LC0GSNGEGXRuMXE8T1Wg/UeZh88vDXZZ4X9F13U4liMM\nkRe/wWVVMvqD4w0XTiihjGE6V6HWguDFv3tKDWhE79vAwEwRabRRIMFB/wEdZP5E\n1TniFAC+pysiGZtMZNAx5S0IdJab566xigEMol2HQcq7eDlcWXJNxWODkEc8/saV\nfj/Nktn+1Ql1s0mBYihNCKeSXqy4sar9HKJTJNGK8DUlYRRHctB6vwoP9MkjxLXQ\nEzwVRsISsK8t+nal25PaJiZUy2wikvVL7VsPL1sMBQKBgQDyIHMZKJnbnIY8mfTr\nHOQs15E88XOMPFsz/i5fboepcT1cfzVyP1QCdB9oy/I5hH9fyiS8jLFbzFB20di6\n0jZ+HRk1yNXvTJuUj1ShepO/efKj7fX4LPpHY3KyPQtm0bZFN01sq1BvbTYkiByA\nAHPu684wT3us+5aXMJ9ZQfvYBQKBgQDEH2/pfq1IzP51g1lkj4dtTC5AVeqTr6Gv\n0X7FszGlBW24qLCPq5yvVpUUAb6Nt3G/UKfYUvNQqclsda3yp+gDmTRhVNUY3jI0\n3BRJRbzV38pnzcvrkHGREyIrMCmDXQvkNmNOP7wvCp35YME9HU/yvLklY6XP2J4W\nN+vndar0owKBgFOjz/693sBVRq3ChS9+sHepE7vYsJCd/OduA7jlpqlqu8arDtxj\ncfLTCFKcORWTZqjBXIVhmJbccmNJRDPtD/Pqu12v/e8HKKteA98wR7+aMa5dMl3D\ns8VbXjCiE8E16l/opa9HUqbbNBvUhPvWrDW5cWWQ32k3E6Mwoasktwm9AoGBAI0x\nzNIfXwXAf5l+nMbnBirL46hxslXs5cy8WDZg0ebqR5nf6G0mscER5nXm45cHcJ65\npHz7Cy0Rb2/kMP03oLOmgq1n85rZrO+dWgV+bXrUiNW+tYa8EObPDZRmMhzeygbc\nmRXmkMaVMDIvVC95gOtSr0CZwvAmFXoNfIrAjfldAoGAQR7vkpDv3veAdq/fzwwT\nbbJmXUSjrLeb3Iry8FFMnjR38lstsE+SvnAMn2csXArGFXfDml88lUax7D/be/Wn\nr6Mluan39N/d2IxBIYArYnCDb4szP9fJ1tFDG7noxt2XlOjB+JdxWNFKm7CikWhi\njV2cmw6/urSi2NSvTzLBblY=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-suvj2@portfolios-62a43.iam.gserviceaccount.com",
  client_id: "102517957285122848358",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-suvj2%40portfolios-62a43.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

initializeApp(firebaseConfig);


