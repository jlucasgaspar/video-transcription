import { IController } from '../protocols/IController';
import { IHttpRequest, IHttpResponse } from '../protocols/IHttp';
import { InvalidFileError } from '../errors/InvalidFile';

export class TranscriptionController implements IController {
    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        if (!httpRequest.file) {
            throw new InvalidFileError()
        }

        console.log(httpRequest.file)

        // Vai receber 1 storageProvider que retorna a URI da Amazon lá do bucket
        // Vai ter um UseCase pra mandar essa URI pra transcription da Amazon
        // Vai chamar o transcriptProvider que retorna um arquivo transcrito, da Amazon tbm
        // Vai ter um UseCase que pega esse arquivo e mostra pra Luiza

        return {
            statusCode: 200,
            body: httpRequest.file
        }
    }
}