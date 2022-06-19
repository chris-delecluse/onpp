import { AnyEntity, MikroORM }                from "@mikro-orm/core";
import { Question }                           from "entities/Question";
import { QuestionAnswerItem }                 from "entities/QuestionAnswerItem";
import { QuestionDescriptionItemImage }       from "entities/QuestionDescriptionItemImage";
import { QuestionDescriptionItemText }        from "entities/QuestionDescriptionItemText";
import { QuestionDescriptionItem }            from "entities/QuestionDescriptionItem";
import { AnswerIndex }                        from "entities/AnswerIndex";
import { ItemType }                           from "entities/ItemType";
import { PostgreSqlDriver, SqlEntityManager } from "@mikro-orm/postgresql";
import { QuestionSolution }                   from "entities/QuestionSolution";
import { UserAnswer }                         from "entities/UserAnswer";
import { UserAnswerResult }                   from "entities/UserAnswerResult";

export class InitDatabase {
    orm: MikroORM<PostgreSqlDriver>;
    em: SqlEntityManager<PostgreSqlDriver>;

    questions: Question[]                  = [];
    questionSolutions: QuestionSolution[]  = [];
    questionAnswers: QuestionAnswerItem[]  = [];
    qdItems: QuestionDescriptionItem[]     = [];
    images: QuestionDescriptionItemImage[] = [];
    texts: QuestionDescriptionItemText[]   = [];
    userAnswer: UserAnswer[]               = [];
    userAnswerResult: UserAnswerResult[]   = [];

    constructor(orm: MikroORM<PostgreSqlDriver>) {
        this.orm = orm;
        this.em  = orm.em.fork();
    }

    resetDb = async () => {
        await this.orm.getSchemaGenerator().dropSchema({wrap: false});
        await this.orm.getSchemaGenerator().updateSchema({wrap: false});

        await this.addQuestions();

        for (const el of this.result) {
            await this.em.persist(el);
        }
        await this.em.flush();
    };

    addQuestions = async () => {

        this.questions = [
            new Question("de quel couleur est la voiture rouge", this.questionSolutions[0]),
            new Question("combient fais 3X2", this.questionSolutions[1]),
            new Question("que signifie FR", this.questionSolutions[2]),
            new Question("la communaute de LOL est elle toxic ?", this.questionSolutions[3])
        ];

        this.questionSolutions = [
            new QuestionSolution(this.questions[0], AnswerIndex.Third),
            new QuestionSolution(this.questions[1], AnswerIndex.Fourth),
            new QuestionSolution(this.questions[2], AnswerIndex.Second),
            new QuestionSolution(this.questions[3], AnswerIndex.Second)
        ];

        this.questionAnswers = [
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
        ];

        this.qdItems = [
            new QuestionDescriptionItem(this.questions[0], ItemType.Image, 3, /* ordre affichage */ 0),
            new QuestionDescriptionItem(this.questions[1], ItemType.Image, 2, /* ordre affichage */ 1),
            new QuestionDescriptionItem(this.questions[2], ItemType.Image, 0, /* ordre affichage */ 0),
            new QuestionDescriptionItem(this.questions[3], ItemType.Image, 1, /* ordre affichage */ 1),

            new QuestionDescriptionItem(this.questions[0], ItemType.Text, 0, /* ordre affichage */ 1),
            new QuestionDescriptionItem(this.questions[1], ItemType.Text, 1, /* ordre affichage */ 0),
            new QuestionDescriptionItem(this.questions[2], ItemType.Text, 2, /* ordre affichage */ 1),
            new QuestionDescriptionItem(this.questions[3], ItemType.Text, 3, /* ordre affichage */ 0)
        ];

        this.images = [
            new QuestionDescriptionItemImage("01.png"),
            new QuestionDescriptionItemImage("02.png"),
            new QuestionDescriptionItemImage("03.png"),
            new QuestionDescriptionItemImage("04.png")
        ];

        this.texts = [
            new QuestionDescriptionItemText("hello"),
            new QuestionDescriptionItemText("world"),
            new QuestionDescriptionItemText("les gars"),
            new QuestionDescriptionItemText("pas d idee")
        ];

        this.userAnswer = [
            new UserAnswer(this.questions[0], AnswerIndex.Third, "billy"),
            new UserAnswer(this.questions[1], AnswerIndex.Fourth, "billy"),
            new UserAnswer(this.questions[2], AnswerIndex.First, "billy"),
            new UserAnswer(this.questions[3], AnswerIndex.Second, "billy")
        ];

        this.userAnswerResult = [
            new UserAnswerResult(this.userAnswer[0], true),
            new UserAnswerResult(this.userAnswer[1], true),
            new UserAnswerResult(this.userAnswer[2], false),
            new UserAnswerResult(this.userAnswer[0], true)
        ];

        this.result = [
            this.questions,
            this.questionSolutions,
            this.questionAnswers,
            this.qdItems,
            this.images,
            this.texts,
            this.userAnswer,
            this.userAnswerResult
        ];

        console.log(this.result);
    };

    result: AnyEntity<any>[] = [];
}