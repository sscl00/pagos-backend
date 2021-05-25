// dependencies mongo-client
import { MongoClient, ObjectId } from 'mongodb';
import config from '../config/envServer';

// other dependencies
import ServerError from '../utils/error';
import Response from '../utils/log';

// mongo-client configuration
const { dbUser, dbPassword, dbName, dbHost } = config;
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const DB_NAME = dbName;
const DB_HOST = dbHost;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

export default class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });
        this.dbName = DB_NAME;
    }

    /**
     * singleton pattern for pool connection
     * @throws {ErrorObject} - error connection
     * @returns {object} - connection client
     */
    async connect() {
        try {
            if (!MongoLib.connection) {
                await this.client.connect();
                Response.info(`Connected succesfully to ${DB_NAME}`);
                MongoLib.connection = this.client.db(this.dbName);
            }
            return MongoLib.connection;
        } catch ({ message }) {
            throw new ServerError('error connection').response(message);
        }
    }

    /**
     * fetch all documents collection
     * if exist query, fetch all documentos collection depending by query
     * @param {string} collection - collection name
     * @param {object} [query={}] - query request
     * @param {object} [projection={}] - projection request
     * @throws {ErrorObject} - error query
     * @returns {array} - response query mongoDB as array
     */
    async get(collection, query = {}, projection = {}) {
        try {
            const db = await this.connect();
            return await db
                .collection(collection)
                .find(query, { projection })
                .toArray();
        } catch ({ message }) {
            throw new ServerError('error query get').response(message);
        }
    }

    /**
     * create a new document
     * @param {string} collection - collection name
     * @param {ModelObject} data - model object
     * @throws {ErrorObject} - error query
     * @return {ModelObject} - response query mongoDB as object
     */
    async create(collection, data) {
        try {
            const db = await this.connect();
            return await db.collection(collection).insertOne(data);
        } catch ({ message }) {
            throw new ServerError('error query create').response(message);
        }
    }

    /**
     * update document searched by it's _id
     * option upsert instructs avoid create a document if no documents match the filter
     * @param {string} collection - collection name
     * @param {ModelObject} data - model object
     * @throws {ErrorObject} - error query
     * @return {ModelObject} - response query mongoDB as object
     */
    async updadte(collection, data) {
        try {
            const db = await this.connect();
            return await db
                .collection(collection)
                .updateOne(
                    { _id: ObjectId(data._id) },
                    { $set: data },
                    { upsert: false }
                );
        } catch ({ message }) {
            throw new ServerError('error query update').response(message);
        }
    }

    /**
     * delete a document searched by it's _id
     * @param {string} collection - collection name
     * @param {string} id - objectID document
     * @throws {ErrorObject} - error query
     * @return {object} - response query mongoDB as object
     */
    async delete(collection, id) {
        try {
            const db = await this.connect();
            return await db
                .collection(collection)
                .deleteOne({ _id: ObjectId(id) });
        } catch ({ message }) {
            throw new ServerError('error query update').response(message);
        }
    }
}
