package op

import (
	"fmt"

	"github.com/midtrans/midtrans-go"
	"github.com/midtrans/midtrans-go/snap"
)

func Paytest(n int) string {
	//Initiate client for Midtrans CoreAPI
	var c snap.Client
	c.New("SB-Mid-server-30-r1N7PybJ2hutM6viD6uTf", midtrans.Sandbox)

	var r snap.Request
	r.TransactionDetails.OrderID = "test-0001"
	r.TransactionDetails.GrossAmt = int64(n)

	res, err := c.CreateTransaction(&r)
	if err == nil {
		fmt.Print(err)
	}
	return res.RedirectURL
}
