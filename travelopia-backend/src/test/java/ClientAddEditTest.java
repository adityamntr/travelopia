import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import com.travelopia.model.Client;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;


public class ClientAddEditTest extends AbstractTest {
    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    @Test
    public void getClientView() throws Exception {
        String uri = "/clients/view";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        Client[] clients = super.mapFromJson(content, Client[].class);
        assertTrue(clients.length >= 0);
    }

    @Test
    public void addClient() throws Exception {
        String uri = "/clients/add";
        Client client = new Client();
        client.setName("Aditya");
        client.setEmail("adityamntr@gmail.com");
        client.setDestination("Africa");
        client.setTravellerCount(6);
        client.setBudget(423);

        String inputJson = super.mapToJson(client);
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(201, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals(content, "{\"id\":1,\"name\":\"Aditya\",\"email\":\"adityamntr@gmail.com\",\"destination\":\"Africa\",\"travellerCount\":6,\"budget\":423}");
    }

}