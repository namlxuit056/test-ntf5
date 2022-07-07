import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class ShareService {
  hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }

  comparePassword(password, hashPassword) {
    return bcrypt.compare(password, hashPassword);
  }
}
