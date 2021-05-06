import { AppModel } from './../app/app.model';
import { model, Model, type, io, query, validate, ObjectId, mongo } from '../../';
let debug = require('debug')('app:models:dico');

@model('template')
export class TemplateModel extends Model {

  @type.model({model: AppModel})
  @io.input
  @io.toDocument
  @query.filterable({type: 'auto'})
  @validate.required
  @mongo.index({type: 'single'})
  public appId: ObjectId | null = null;

  @type.string
  @io.all
  @validate.required
  @validate.uniqueByApp
  @mongo.index({type: 'single'})
  public key: string = '';

  @type.string({multilang: true, locales: []})
  @io.all
  @validate.required
  public subject: string | {[key: string]: string} = '';

  @type.string({multilang: true, locales: []})
  @io.all
  @validate.required
  public html: string | {[key: string]: string} = '';

  @type.string({multilang: true, locales: []})
  @io.all
  public text: string | {[key: string]: string} = '';

  @type.string({multilang: true, locales: []})
  @io.all
  public sms: string | {[key: string]: string} = '';

}