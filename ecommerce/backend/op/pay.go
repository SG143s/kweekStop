package op

import (
	"fmt"

	"github.com/midtrans/midtrans-go"
	"github.com/midtrans/midtrans-go/snap"
)

func Paytest() {
	//Initiate client for Midtrans CoreAPI
	var c snap.Client
	c.New("SB-Mid-server-30-r1N7PybJ2hutM6viD6uTf", midtrans.Sandbox)

	var r snap.Request
	r.TransactionDetails.OrderID = "test-0001"
	r.TransactionDetails.GrossAmt = 40000

	res, err := c.CreateTransaction(&r)
	if err == nil {
		fmt.Print(err)
	}
	fmt.Print(res)
}
