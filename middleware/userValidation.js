import ResourcesService from '../../services/ResourcesService';
import UserSchema from '../../schema/userSchema';

import Response from '../../utils/log';
import ServerError from '../../utils/error';

const service = new ResourcesService('User');
const { userSchema, filterUserSchema } = UserSchema

const userValidation = (data) => {
    try{
        if (!validate(data.email)){
            data.
        }
    }
    catch(error){

    }
}

const validate  = (filter) => {
    try{
        return await service.getResource(filter) ? true : false;
    }
    catch(error){
        Response.error("ocurrio un error");
        Response.error(error);
    }
    
}