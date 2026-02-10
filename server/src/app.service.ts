import { Injectable } from '@nestjs/common';
import { AnyARecord } from 'dns';
import { User } from './interfaces/interfaces';
import { stringify } from 'querystring';
import axios from 'axios';

@Injectable()
export class AppService {
}
