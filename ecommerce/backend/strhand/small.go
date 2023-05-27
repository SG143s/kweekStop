package strhand

type userTop struct {
	Log        bool   `json:"logio"`
	ID         string `json:"uid"`
	UserName   string `json:"uname"`
	ProfilePic string `json:"prpic"`
}

type LogInf struct {
	Email    string `json:"lemail"`
	Password string `json:"lpass"`
}

type prodSim struct {
	ID       string  `json:"pid"`
	Name     string  `json:"pname"`
	Price    int     `json:"orprice"`
	DisPrice int     `json:"discprice"`
	Category string  `json:"pcat"`
	Rating   float32 `json:"prate"`
	SReview  int     `json:"psrev"`
}

type catLink struct {
	ID   int    `json:"cid"`
	Name string `json:"cname"`
	Img  string `json:"cimg"`
}

type reviews struct {
	UserName string  `json:"uname"`
	Rating   float32 `json:"urate"`
	Review   string  `json:"urev"`
}

type shopSim struct {
	ID   string  `json:"sid"`
	Name string  `json:"sname"`
	Img  string  `json:"simg"`
	Rate float32 `json:"srate"`
}

type prodCom struct {
	Base prodSim `json:"pbase"`
	Desc string  `json:"pdesc"`
	Shop shopSim `json:"sbase"`
}

type shopCom struct {
	Base    shopSim `json:"sbase"`
	Address string  `json:"saddr"`
}
