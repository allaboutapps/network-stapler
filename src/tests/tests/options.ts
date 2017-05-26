import "mocha";
import { expect } from "chai";
import { APIClient, IAPITarget, IAPIClientOptions } from "../../APIClient";
import * as mockServer from "../utils/MockServer";

describe("should test APIClient options", function () {

    it("should throw when encountering statuscode 400", function (done) {

        const options: IAPIClientOptions = {
            baseUrl: mockServer.mockServerBaseUrl,
            throwOnErrorStatusCodes: true
        };

        const client = new APIClient(options);

        const error400Target: IAPITarget = {
            method: "GET",
            url: "/api/v1/return-error-status-code-400"
        };

        client.request(error400Target).then(value => {
            expect(value).to.be.empty("empty", "expected an error in catch block");
        }).catch(error => {
            done();
        });
    });
});