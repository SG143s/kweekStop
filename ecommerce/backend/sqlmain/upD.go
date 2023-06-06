package sqlmain

import (
	strs "github.com/SG143s/kweekStop/ecommerce/strhand"
)

func UsRegis(info strs.UserInfo) bool {
<<<<<<< HEAD
	_, err := db.Query("INSERT INTO users values (?, ?, ?, ?, ?, false, 0, ?)", info.ID, info.Name, info.UserName, info.Email, info.Password, info.ProfilePic)
	if err != nil {
		return false
	}
	return true
=======
	_, err := db.Query("INSERT INTO users values (?, ?, ?, ?, ?, 'false', 0, ?)", info.ID, info.Name, info.UserName, info.Email, info.Password, info.ProfilePic)
	return err == nil
>>>>>>> 46ae28c089e74d613397d20196c03e1d76c1daf1
}

func CartAdd(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL addcart(?, ?, ?)", uid, info.ID, info.Quantity)
	return err == nil
}

func CartOp1(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL cartop1(?, ?)", uid, info.ID)
	return err == nil
}

func CartOp2(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL cartop2(?, ?)", uid, info.ID)
	return err == nil
}

func CartOp3(info strs.ProdCAdd, uid string) bool {
	_, err := db.Query("CALL cartop3(?, ?)", uid, info.ID)
	return err == nil
}
