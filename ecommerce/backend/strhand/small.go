package strhand

type UserTop struct {
	Log        bool   `json:"logio"`
	ID         string `json:"uid"`
	UserName   string `json:"uname"`
	ProfilePic string `json:"prpic"`
}

type UserInfo struct {
	ID         string `json:"uid"`
	Name       string `json:"name"`
	UserName   string `json:"usname"`
	Email      string `json:"email"`
	Password   string `json:"passw"`
	ProfilePic string `json:"prpic"`
}

type LogInf struct {
	Username string `json:"luname"`
	Password string `json:"lpass"`
}

type ProdSim struct {
	Base     ProdBase `json:"base"`
	Imgpath  string   `json:"imgpath"`
	DisPrice float32  `json:"discprice"`
}

type ProdBase struct {
	ID       string  `json:"pid"`
	Name     string  `json:"pname"`
	Price    float32 `json:"orprice"`
	Category string  `json:"pcat"`
	Rating   float32 `json:"prate"`
	SReview  int     `json:"psrev"`
}

type CatLink struct {
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

type ProdCom struct {
	Base     ProdBase `json:"pbase"`
	Imgpaths []string `json:"imgpaths"`
	Desc     string   `json:"pdesc"`
	Shop     shopSim  `json:"sbase"`
}

type shopCom struct {
	Base    shopSim `json:"sbase"`
	Address string  `json:"saddr"`
}

type ProdCart struct {
	ID       string  `json:"pid"`
	Name     string  `json:"pname"`
	Quantity int     `json:"quan"`
	SPrice   float32 `json:"sprice"`
	ToPrice  float32 `json:"tprice"`
}

type ShopCart struct {
	Base  shopSim    `json:"shopd"`
	Items []ProdCart `json:"itemd"`
}

type ProdCAdd struct {
	ID       string `json:"pid"`
	Quantity int    `json:"quan"`
}
