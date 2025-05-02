import Image from "next/image";

export default function OrderPage() {
    return (
        <div>
            {/* Navbar */}
            

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                {/* Header: Selected Service Details */}
                <section className="mb-8">
                    <h1 className="text-3xl font-bold">Order Summary</h1>
                    <p className="text-lg mt-2">
                        You are about to place an order for: <strong>Membuat desain grafis profesional untuk berbagai kebutuhan.</strong>
                    </p>
                </section>

                {/* Form Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Wallet Balance and Payment Methods */}
                    <div>
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <h2 className="text-xl font-bold mb-4">WALLET BALANCE</h2>
                            <div className="flex items-center gap-4">
                                <input type="checkbox" id="walletCheckbox" checked />
                                <img src="/epic-games-wallet.png" alt="Epic Games Wallet" width={50} height={50} />
                                <span>Wallet €0.00</span>
                            </div>
                            <p className="text-gray-600 mt-2">
                                Your online wallet can store funds and be used to make Epic Games purchases. An Epic Games Wallet can be funded using a registered payment method.
                                <a href="#" className="text-blue-500 hover:text-blue-700 ml-2">
                                    Learn more about your Epic Games Wallet
                                </a>
                            </p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4">
                                ADD FUNDS TO WALLET
                            </button>
                        </div>

                        <div className="bg-white shadow-md p-6 rounded-lg mt-8">
                            <h2 className="text-xl font-bold mb-4">OTHER PAYMENT METHODS</h2>
                            <div className="space-y-4">
                                {/* Credit Card */}
                                <label className="flex items-center gap-4 cursor-pointer">
                                    <input type="radio" name="paymentMethod" value="credit-card" />
                                    <img src="/credit-card-icon.png" alt="Credit Card" width={50} height={50} />
                                    <span>Credit Card</span>
                                </label>

                                {/* PayPal */}
                                <label className="flex items-center gap-4 cursor-pointer">
                                    <input type="radio" name="paymentMethod" value="paypal" />
                                    <img src="/paypal-icon.png" alt="PayPal" width={50} height={50} />
                                    <span>PayPal</span>
                                </label>

                                {/* Amazon Pay */}
                                <label className="flex items-center gap-4 cursor-pointer">
                                    <input type="radio" name="paymentMethod" value="amazon-pay" />
                                    <img src="/amazon-pay-icon.png" alt="Amazon Pay" width={50} height={50} />
                                    <span>Amazon Pay</span>
                                </label>

                                {/* Neosurf */}
                                <label className="flex items-center gap-4 cursor-pointer">
                                    <input type="radio" name="paymentMethod" value="neosurf" />
                                    <img src="/neosurf-icon.png" alt="Neosurf" width={50} height={50} />
                                    <span>Neosurf</span>
                                    <span className="text-gray-500">(Payment Processor Fee: 6%)</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div>
                        <div className="bg-white shadow-md p-6 rounded-lg">
                            <div className="mb-4">
                                <label htmlFor="creatorCode" className="block text-gray-700 font-medium mb-2">
                                    Enter creator code
                                </label>
                                <input
                                    type="text"
                                    id="creatorCode"
                                    placeholder="Creator Code"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">
                                    Need Help?{" "}
                                    <a href="#" className="text-blue-500 hover:text-blue-700">
                                        Contact Us
                                    </a>
                                </p>
                            </div>
                            <div className="mt-8">
                                <p className="text-sm text-gray-600">
                                    By clicking “Place Order” below, I represent that I am over 18 and an authorized user of this payment method. I agree to the
                                    <a href="#" className="text-blue-500 hover:text-blue-700">
                                        End User License Agreement
                                    </a>. By selecting Wallet funds to complete this purchase, I agree to the
                                    <a href="#" className="text-blue-500 hover:text-blue-700">
                                        Wallet Terms and Conditions
                                    </a>.
                                </p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p className="text-sm text-gray-600">Price</p>
                                <p className="text-sm text-gray-600">€80.99</p>
                            </div>
                            <div className="flex justify-between mt-2">
                                <p className="text-sm text-gray-600">VAT included if applicable</p>
                                <p className="text-sm text-gray-600">€0.00</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mt-2 font-bold">
                                <p className="text-sm">Total</p>
                                <p className="text-sm">€80.99</p>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4">
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}