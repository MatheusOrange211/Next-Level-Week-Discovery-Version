module.exports =  async function createProffy(db,{proffyValue,classValue,classScheduleValues}){
    //será necessário o uso do ASYNC e AWAIT. com eles, descarta-se a necessidade de usar .then(), diminui o codigo e ainda faço a msm ideia de esperar algo ocorrer para executar a linha
    //inserir dados na table proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES(
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID


    //inserir dados na tabela classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na table class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue)=>{
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    //Aqui vou executar todos os db.runs() da classe schedules
    await Promise.all(insertedAllClassScheduleValues)
}