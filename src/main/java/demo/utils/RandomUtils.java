package demo.utils;

import com.github.javafaker.Faker;
import java.util.ArrayList;
import java.util.List;

public class RandomUtils {

    private static final Faker faker = new Faker();

    public static String generateRandomPhoneNumber(int length) {
        String randomNumber = "";
        int randomPick = faker.number().numberBetween(0, 8);

        if (length == 0) {
            length = faker.number().numberBetween(9, 12);
        }
        randomNumber = randomNumber.concat(faker.number().digits(length - 2));

        List<String> phoneNumber = new ArrayList<>();
        phoneNumber.add("81".concat(randomNumber));
        phoneNumber.add("82".concat(randomNumber));
        phoneNumber.add("83".concat(randomNumber));
        phoneNumber.add("85".concat(randomNumber));
        phoneNumber.add("87".concat(randomNumber));
        phoneNumber.add("88".concat(randomNumber));
        phoneNumber.add("89".concat(randomNumber));

        return phoneNumber.get(randomPick);
    }

    public static String generateRandomEmail(int length) {
        String randomName;
        int randomPick = faker.number().numberBetween(0, 2);

        if (length == 74) {
            randomName = faker.name().fullName().toLowerCase().replace(" ",".").concat(".");
            int nameLength = length - randomName.length() - 10;
                randomName = randomName.concat(faker.number().digits(nameLength));
        } else if (length == 6){
            if (faker.bool().bool()) {
                return faker.letterify("?@?.??");
            } else {
                return faker.bothify("#@?.??");
            }
        } else {
            randomName = faker.name().fullName().toLowerCase().replace(" ",".");
            randomName = randomName.concat("." + faker.number().digits(2));
        }
        List<String> email = new ArrayList<>();
        email.add(randomName.concat("@gmail.com"));
        email.add(randomName.concat("@yahoo.com"));

        return email.get(randomPick);
    }

}
