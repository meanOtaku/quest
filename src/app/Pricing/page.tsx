import Head from "next/head";
import Link from "next/link";
import pricing from "./Pricing.module.css";
import Questions from "@/component/questions/question";

export default function Pricing() {
  return (
    <div className="">
      <div className="flex flex-col text-center space-x-4">
        <div className="sm:text-6xl text-3xl">
          <h1>
            Flexible Plans, <br />
            Transparent Pricing
          </h1>
        </div>
        <p>Find the Perfect Fit for You</p>
        <p className={pricing.orange}>
          30-day free trial with money-back guarantee.
        </p>
        <h2 className="sm:text-3xl mt-5 mb-5">Compare our plans</h2>
        <div
          className="flex flex-col sm:self-center text-left sm:w-3/5 w-1/5 text-xs"
        >
          <table className={`${pricing.planTable}`}>
            <thead className="text-lg font-normal">
              <tr>
                <th>Features</th>
                <th>
                  Starter <br />{" "}
                  <div className="text-xs text-slate-800 font-thin">
                    $17/month, billed <br />
                    monthly
                  </div>
                </th>
                <th>
                  Premium <br />
                  <div className="text-xs text-slate-800 font-thin">
                    $88/month, billed <br />
                    monthly
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="font-thin">
              <tr>
                <td className="text-lg font-bold">Basic Management</td>
              </tr>
              <tr>
                <td>Users</td>
                <td>
                  1 <hr />
                </td>
                <td>
                  15
                  <hr />
                </td>
              </tr>
              <tr>
                <td>Branches</td>
                <td>
                  1<hr />
                </td>
                <td>
                  10
                  <hr />
                </td>
              </tr>
              <tr>
                <td>Courses</td>
                <td>
                  3<hr />
                </td>
                <td>
                  15/branch
                  <hr />
                </td>
              </tr>
              <tr>
                <td>Max. Students Allowed</td>
                <td>
                  25
                  <hr />
                </td>
                <td>
                  500
                  <hr />
                </td>
              </tr>
              <tr>
                <td>Communication</td>
                <td>
                  25
                  <hr />
                </td>
                <td>
                  Yes
                  <hr />
                </td>
              </tr>
              <tr>
                <td>Bulk Updates</td>
                <td>
                  25
                  <hr />
                </td>
                <td>
                  Yes
                  <hr />
                </td>
              </tr>
              <tr>
                <td>User Roles</td>
                <td>
                  25
                  <hr />
                </td>
                <td>
                  Yes
                  <hr />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button className={pricing.orangeButton}>
                    Get Started →
                  </button>
                  <br />
                  <div className="text-xs">No Credit card required</div>
                </td>
                <td>
                  <button className={pricing.orangeButton}>
                    Get Started →
                  </button>
                  <br />
                  <div className="text-xs">No Credit card required</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Questions />
    </div>
  );
}
