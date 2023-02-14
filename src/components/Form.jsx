import React from "react";
import Div from "./Div";

const Form = () => {
    const formSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Div className="max-w-[1200px] mx-auto">
            <form className="flex flex-col gap-8" onSubmit={formSubmitHandler}>
                {/* ROW START */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {/* NAME - FORM FIELD START */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="name"
                            className="text-[16px] text-black uppercase"
                        >
                            Your name<sup>*</sup>
                        </label>
                        <input
                            name="name"
                            type="text"
                            className="h-[64px] bg-white outline-none border-none text-black px-4"
                        />
                    </div>
                    {/* NAME - FORM FIELD END */}

                    {/* EMAIL - FORM FIELD START */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-[16px] text-black uppercase"
                        >
                            Your email<sup>*</sup>
                        </label>
                        <input
                            name="email"
                            type="text"
                            className="h-[64px] bg-white outline-none border-none text-black px-4"
                        />
                    </div>
                    {/* EMAIL - FORM FIELD END */}
                </div>
                {/* ROW END */}

                {/* ROW START */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {/* SERVICE - FORM FIELD START */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="service"
                            className="text-[16px] text-black uppercase"
                        >
                            What service you are interested in
                        </label>
                        <input
                            name="service"
                            type="text"
                            className="h-[64px] bg-white outline-none border-none text-black px-4"
                        />
                    </div>
                    {/* SERVICE - FORM FIELD END */}

                    {/* BUDGET - FORM FIELD START */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="budget"
                            className="text-[16px] text-black uppercase"
                        >
                            {`Budget range in (usd)`}
                            <sup>*</sup>
                        </label>
                        <input
                            name="budget"
                            type="text"
                            className="h-[64px] bg-white outline-none border-none text-black px-4"
                        />
                    </div>
                    {/* BUDGET - FORM FIELD END */}
                </div>
                {/* ROW END */}

                {/* DESCRIPTION - FORM FIELD START */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="description"
                        className="text-[16px] text-black uppercase"
                    >
                        {`Budget range in (usd)`}
                        <sup>*</sup>
                    </label>
                    <textarea
                        name="description"
                        className="h-[162px] bg-white outline-none border-none text-black p-4 resize-none"
                    />
                </div>
                {/* DESCRIPTION - FORM FIELD END */}

                {/* SUBMIT BUTTON */}
                <button className="bg-[#111111] h-[64px] max-w-[585px] text-[16px] transition-transform active:scale-[0.95]">
                    Send Contact Request Now
                </button>
                {/* SUBMIT BUTTON */}
            </form>
        </Div>
    );
};

export default Form;
