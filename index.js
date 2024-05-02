const express = require("express")
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore')
const admin = require("firebase-admin");

const serviceAccount = require("./book-1758c-firebase-adminsdk-f55as-433d23326a.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});