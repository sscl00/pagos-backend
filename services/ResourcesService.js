// dependencies ResourcesService
import MongoLib from '../libs/mongo';

// other dependencies
import Response from '../utils/log';

export default class ResourcesService {
    /**
     * DAO mongoDB collections
     * @param {string} collection - collection name
     */
    constructor(collection) {
        this.collection = collection;
        this.mongoDB = new MongoLib();
    }

    /**
     * fetch all documents collection
     * if exist filter, fetch all documentos collection depending of text search
     * @param {[{filter: string, fields: array<string>, username: string}={}]} - for text search , projection
     * @throws {ErrorObject}
     * @returns {array} - response query mongoDB as array
     */
    async getResource({ filter, fields, username: user_name } = {}) {
        try {
            const query = user_name
                ? { user_name }
                : filter && { $text: { $search: filter } };
            const projection =
                fields &&
                fields.reduce((projection, field) => {
                    projection[field] = 1;
                    return projection;
                }, {});
            const resource = await this.mongoDB.get(
                this.collection,
                query,
                projection
            );
            return resource;
        } catch (error) {
            Response.error(error);
            throw error;
        }
    }

    /**
     * create a new document
     * @param {ModelObject} data - data document
     * @throws {ErrorObject} - error query
     * @return {ModelObject} - response query mongoDB as object
     */
    createResource(data) {
        try {
            const resource = this.mongoDB.create(this.collection, data);
            return resource || '';
        } catch (error) {
            Response.error(error);
            throw error;
        }
    }

    /**
     * update document data
     * @param {ModelObject} data - data document
     * @throws {ErrorObject} - error query
     * @return {ModelObject} - response query mongoDB as object
     */
    updateResource(data) {
        try {
            const resource = this.mongoDB.updadte(this.collection, data);
            return resource || '';
        } catch (error) {
            Response.error(error);
            throw error;
        }
    }

    /**
     * delete a document searched by it's _id
     * @param {string} id - objectID document
     * @throws {ErrorObject} - error query
     * @return {number} - 1 -> success, 0 -> without effect
     */
    deleteResource({ id }) {
        try {
            const { deletedCount: isSuccess } = this.mongoDB.updadte(
                this.collection,
                id
            );
            return isSuccess;
        } catch (error) {
            Response.error(error);
            throw error;
        }
    }
}
