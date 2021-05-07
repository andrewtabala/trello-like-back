let lists = [
    {name: "First", tasks: [
      {name: "FirstListTask1", lastEdited: "2021-05-06T15:00:00.000Z", id: "0"},
      {name: "FirstListTask2", lastEdited: "2021-05-06T14:00:00.000Z", id: "1"},
      {name: "FirstListTask3", lastEdited: "2021-05-06T13:00:00.000Z", id: "2"},
    ]},
    {name: "Second", tasks: [
      {name: "SecondListTask1", lastEdited: "2021-05-05T15:00:00.000Z", id: "0"},
      {name: "SecondListTask2", lastEdited: "2021-05-05T14:00:00.000Z", id: "1"},
      {name: "SecondListTask3", lastEdited: "2021-05-05T13:00:00.000Z", id: "2"},
    ]},
    {name: "Third", tasks: [
      {name: "ThirdListTask1", lastEdited: "2021-05-04T15:00:00.000Z", id: "7"},
      {name: "ThirdListTask2", lastEdited: "2021-05-04T14:00:00.000Z", id: "8"},
      {name: "ThirdListTask3", lastEdited: "2021-05-04T13:00:00.000Z", id: "9"},
    ]},
  ]

exports.getListsController = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "List of available lists",
        data: {
            lists
        }
    })

}

exports.addListController = async (req, res) => {
    const { newList } = req.body

    if (!newList) {
        res.status(400).json({
            success: false,
            message: "Failed"
        })
    }

    lists.push(newList)

    res.status(200).json({
        success: true,
        message: "Lists updated",
        data: {
            lists
        }
    })
}

exports.updateListController = async (req, res) => {
    
    const {listIndex, newContent} = req.body

    if (listIndex === undefined || !newContent) {
        res.status(400).json({
            success: false,
            message: "Failed"
        })
    }

    lists[listIndex] = newContent

    res.status(200).json({
        success: true,
        message: "Lists updated",
        data: {
            lists
        }
    })
}

exports.deleteListController = async (req, res) => {

    const {listIndex} = req.body

    if (!listIndex) {
        res.status(400).json({
            success: false,
            message: "Failed"
        })
    }

    lists.splice(listIndex, 1)

    res.status(200).json({
        success: true,
        message: "Lists updated",
        data: {
            lists
        }
    })

} 