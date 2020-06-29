import { Router } from 'express';
import {userInfo,login} from '../controllers/userController'
import authorToken from '../middleware/author'
const router = Router();

router.get('/user',userInfo);
router.post('/login',authorToken.verifyToken,login);

export default router