import { IController } from '../protocols/IController';
import { IHttpRequest, IHttpResponse } from '../protocols/IHttp';

export class TranscriptionController implements IController {
    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {

        // Vai receber 1 storageProvider que retorna a URI da Amazon lá do bucket
        // Vai ter um UseCase pra mandar essa URI pra transcription da Amazon
        // Vai chamar o transcriptProvider que retorna um arquivo transcrito, da Amazon tbm
        // Vai ter um UseCase que pega esse arquivo e mostra pra Luiza

        
        
        return new Promise(resolve => resolve({ statusCode: 100, body: 'oi' }));
    }
}