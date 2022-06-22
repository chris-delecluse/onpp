import { Question } from "entities/Question";
import { QuestionAnswerItem } from "entities/QuestionAnswerItem";
import { QuestionDescriptionItemImage } from "entities/QuestionDescriptionItemImage";
import { QuestionDescriptionItemText } from "entities/QuestionDescriptionItemText";
import { QuestionDescriptionItem } from "entities/QuestionDescriptionItem";
import { AnswerIndex } from "entities/AnswerIndex";
import { ItemType } from "entities/ItemType";
import { QuestionSolution } from "entities/QuestionSolution";
import { UserAnswer } from "entities/UserAnswer";
import { UserAnswerResult } from "entities/UserAnswerResult";
import { AppDataSource } from "data-source";

export class InitDatabase {

    questions: Question[]    = [
        new Question("de quel couleur est la voiture rouge"),
        new Question("combient fais 3X2"),
        new Question("que signifie FR"),
        new Question("la communaute de LOL est elle toxic ?")
    ];

    userAnswer: UserAnswer[] = [
        new UserAnswer(this.questions[0], AnswerIndex.Third, "billy"),
        new UserAnswer(this.questions[1], AnswerIndex.Fourth, "billy"),
        new UserAnswer(this.questions[2], AnswerIndex.First, "billy"),
        new UserAnswer(this.questions[3], AnswerIndex.Second, "billy")
    ];

    questionSolutions: QuestionSolution[]  = [];
    questionAnswers: QuestionAnswerItem[]  = [];
    qdItems: QuestionDescriptionItem[]     = [];
    images: QuestionDescriptionItemImage[] = [];
    texts: QuestionDescriptionItemText[]   = [];
    userAnswerResult: UserAnswerResult[]   = [];

    constructor(dev: boolean) {

        if (dev) {
            this.insertQuestion()
                .then(() => this.insertQuestionAnswer())
                .then(() => this.insertQuestionDescriptionItems())
                .then(() => this.insertQuestionSolution())
                .then(() => this.insertImages())
                .then(() => this.insertTexts())
                .then(() => this.insertUserAnswers())
                .then(() => this.insertAnswerResults());
        }
    }

    insertQuestion = async () => {
        const questions = await AppDataSource.getRepository(Question);
        await questions.insert(this.questions);
    };

    insertQuestionSolution = async () => {
        const questionSolutions = await AppDataSource.getRepository(QuestionSolution);
        await questionSolutions.insert([
            new QuestionSolution(this.questions[0], AnswerIndex.Third),
            new QuestionSolution(this.questions[1], AnswerIndex.Fourth),
            new QuestionSolution(this.questions[2], AnswerIndex.Second),
            new QuestionSolution(this.questions[3], AnswerIndex.Second)
        ]);
    };

    insertQuestionAnswer = async () => {
        const questionAnswers = await AppDataSource.getRepository(QuestionAnswerItem);
        await questionAnswers.insert([
            new QuestionAnswerItem(this.questions[0], "bleu", AnswerIndex.First),
            new QuestionAnswerItem(this.questions[0], "vert", AnswerIndex.Second),
            new QuestionAnswerItem(this.questions[0], "rouge", AnswerIndex.Third),
            new QuestionAnswerItem(this.questions[0], "orange", AnswerIndex.Fourth),
            new QuestionAnswerItem(this.questions[1], "12", AnswerIndex.First),
            new QuestionAnswerItem(this.questions[1], "199", AnswerIndex.Second),
            new QuestionAnswerItem(this.questions[1], "7", AnswerIndex.Third),
            new QuestionAnswerItem(this.questions[1], "6", AnswerIndex.Fourth),
            new QuestionAnswerItem(this.questions[2], "Italie", AnswerIndex.First),
            new QuestionAnswerItem(this.questions[2], "France", AnswerIndex.Second),
            new QuestionAnswerItem(this.questions[2], "USA", AnswerIndex.Third),
            new QuestionAnswerItem(this.questions[2], "Holland", AnswerIndex.Fourth),
            new QuestionAnswerItem(this.questions[3], "peut etre", AnswerIndex.First),
            new QuestionAnswerItem(this.questions[3], "oui", AnswerIndex.Second),
            new QuestionAnswerItem(this.questions[3], "absolument pas", AnswerIndex.Third),
            new QuestionAnswerItem(this.questions[3], "jesus", AnswerIndex.Fourth)
        ]);
    };

    insertQuestionDescriptionItems = async () => {
        const questionDescriptionItems = await AppDataSource.getRepository(QuestionDescriptionItem);
        await questionDescriptionItems.insert([
            new QuestionDescriptionItem(this.questions[0], ItemType.Image, 3, /* ordre affichage */ 0),
            new QuestionDescriptionItem(this.questions[1], ItemType.Image, 2, /* ordre affichage */ 1),
            new QuestionDescriptionItem(this.questions[2], ItemType.Image, 0, /* ordre affichage */ 0),
            new QuestionDescriptionItem(this.questions[3], ItemType.Image, 1, /* ordre affichage */ 1),

            new QuestionDescriptionItem(this.questions[0], ItemType.Text, 0, /* ordre affichage */ 1),
            new QuestionDescriptionItem(this.questions[1], ItemType.Text, 1, /* ordre affichage */ 0),
            new QuestionDescriptionItem(this.questions[2], ItemType.Text, 2, /* ordre affichage */ 1),
            new QuestionDescriptionItem(this.questions[3], ItemType.Text, 3, /* ordre affichage */ 0)
        ]);
    };

    insertImages = async () => {
        const images = await AppDataSource.getRepository(QuestionDescriptionItemImage);
        await images.insert([
            new QuestionDescriptionItemImage("01.png"),
            new QuestionDescriptionItemImage("02.png"),
            new QuestionDescriptionItemImage("03.png"),
            new QuestionDescriptionItemImage("04.png")
        ]);
    };

    insertTexts = async () => {
        const texts = await AppDataSource.getRepository(QuestionDescriptionItemText);
        await texts.insert([
            new QuestionDescriptionItemText("hello"),
            new QuestionDescriptionItemText("world"),
            new QuestionDescriptionItemText("les gars"),
            new QuestionDescriptionItemText("pas d idee")
        ]);
    };

    insertUserAnswers = async () => {
        const userAnswers = await AppDataSource.getRepository(UserAnswer);
        await userAnswers.insert(this.userAnswer);
    };

    insertAnswerResults = async () => {
        const answerResults = await AppDataSource.getRepository(UserAnswerResult);
        await answerResults.insert([
            new UserAnswerResult(this.userAnswer[0], true),
            new UserAnswerResult(this.userAnswer[1], true),
            new UserAnswerResult(this.userAnswer[2], false),
            new UserAnswerResult(this.userAnswer[0], true)
        ]);
    };
}
