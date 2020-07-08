package demo.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "idUser",
        "phoneNumber",
        "balance",
        "idRole",
        "name",
        "roleName",
        "email"
})
public class User {

    @JsonProperty("idUser")
    private String idUser;
    @JsonProperty("phoneNumber")
    private String phoneNumber;
    @JsonProperty("balance")
    private String balance;
    @JsonProperty("idRole")
    private String idRole;
    @JsonProperty("name")
    private String name;
    @JsonProperty("roleName")
    private String roleName;
    @JsonProperty("email")
    private String email;

    @JsonProperty("idUser")
    public String getIdUser() {
        return idUser;
    }

    @JsonProperty("idUser")
    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }

    @JsonProperty("phoneNumber")
    public String getPhoneNumber() {
        return phoneNumber;
    }

    @JsonProperty("phoneNumber")
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @JsonProperty("balance")
    public String getBalance() {
        return balance;
    }

    @JsonProperty("balance")
    public void setBalance(String balance) {
        this.balance = balance;
    }

    @JsonProperty("idRole")
    public String getIdRole() {
        return idRole;
    }

    @JsonProperty("idRole")
    public void setIdRole(String idRole) {
        this.idRole = idRole;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("roleName")
    public String getRoleName() {
        return roleName;
    }

    @JsonProperty("roleName")
    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    @JsonProperty("email")
    public String getEmail() {
        return email;
    }

    @JsonProperty("email")
    public void setEmail(String email) {
        this.email = email;
    }

}