import { TranscriptionController } from '../../presentation/controllers/TranscriptionController';

export const makeTranscriptionController = ():TranscriptionController => {

    const transcriptionController = new TranscriptionController();
    
    return transcriptionController;
}